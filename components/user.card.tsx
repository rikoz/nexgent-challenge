import { Avatar, Card, CardBody, CardFooter, Text } from "grommet";
import React from "react";
import Router from 'next/router'
import { Student } from "../services/students";

type Props = {
  user: Student;
};

const UserCard: React.FC<Props> = ({ user }) => (
  <Card height="small" width="small" style={{ cursor: "pointer" }} onClick={() => Router.push({ pathname: user.id })}>
    <CardBody align="center" pad="medium">
      <Avatar src={user.avatar} size="large" />
    </CardBody>
    <CardFooter align="start" justify="center" pad="medium">
      <Text textAlign="center">{`${user["first_name"]} ${user["last_name"]}`}</Text>
    </CardFooter>
  </Card>
);

export default UserCard;
