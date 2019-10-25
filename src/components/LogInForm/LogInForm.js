import React from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";

export default () => (
    <Form>
        <FormGroup>
            <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
            <Input type="password" placeholder="Password"/>
        </FormGroup>
        <FormGroup>
            <Button color="primary">Log in</Button>
        </FormGroup>
    </Form>
);