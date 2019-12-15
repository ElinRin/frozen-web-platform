import React, { useState, useContext, useEffect } from "react";
import { InputGroup, InputGroupAddon, Input, Form } from "reactstrap";

import "./ColleaguesSearch.css";
import Button from "reactstrap/es/Button";
import { searchUsersByName } from "../../actions/user";
import { UsersInfoContext } from "../../app/Context";

export const ColleaguesSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);

  const handleSubmit = async event => {
    event.preventDefault();
    await searchUsersByName(searchValue, usersInfoDispatch);
  };

  return (
    <div className="wrapper">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            placeholder="Full Name"
            type="text"
            value={searchValue}
            onChange={({ currentTarget: { value } }) => setSearchValue(value)}
          />
          <InputGroupAddon addonType="append">
            <Button>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </div>
  );
};
