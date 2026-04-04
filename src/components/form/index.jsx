import React from "react";
import {Button, Input} from "antd";

export default function Form({title, handleClick}) {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");

    return (
        <div className="form">
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}/>

            <Input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}/>

            <Button
                style={{
                    fontSize: "13px",
                    borderRadius: "8px",
                    height: "35px"
                }}
                type="primary"
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </div>
    );
}
