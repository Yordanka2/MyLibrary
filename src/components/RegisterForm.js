import {
    Form,
    Button,
} from "react-bootstrap";
import {useCreateUser, useCurrentUser} from "../graphql/useRequest";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {queryClient} from "../index";

function RegisterForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cookie, setCookie] = useCookies(["token"])

    const {mutate, isSuccess, data} = useCreateUser({
        email,
        password,
        firstName,
        lastName
    })

    const {refetch} = useCurrentUser();

    const registerUser = (e) => {
        e.preventDefault()
        //TODO validate
        mutate()
    }

    useEffect(() => {
        if (isSuccess) {
            const token = data.createUser;
            setCookie("token", token, {
                path: "/",
                maxAge: 360000, // Expires after 1hr
                sameSite: true,
            })
            queryClient.removeQueries('currentUser')
            setTimeout(() => {
                refetch().catch((e) => {
                    console.log(e);
                })
            })
        }
    }, [isSuccess])

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имейл</Form.Label>
                <Form.Control type="email"
                              placeholder="Въведи имейл"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Парола</Form.Label>
                <Form.Control type="password"
                              placeholder="Въведи парола"
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> Повтори парола</Form.Label>
                <Form.Control type="password"
                              placeholder=" Повтори парола"
                              value={repeatPassword}
                              onChange={e => setRepeatPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Име</Form.Label>
                <Form.Control type="text"
                              placeholder="Въведи име"
                              value={firstName}
                              onChange={e => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text"
                              placeholder="Въведи фамилия"
                              value={lastName}
                              onChange={e => setLastName(e.target.value)}
                />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" className="text-white" type="submit"
                        onClick={(e) => registerUser(e)}>
                    Създай акаунт
                </Button>
            </div>
        </Form>
    )
}


export default RegisterForm;



