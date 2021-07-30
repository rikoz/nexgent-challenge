import { Box, TextInput } from "grommet";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from 'querystring'

import { Avatar, Button, Card, CardHeader, CardBody, CardFooter, Grid } from "grommet";
import Icons, { LinkPrevious } from "grommet-icons";
import { fetchStudent, Student } from "../services/students";

type Props = {};

interface IParams extends ParsedUrlQuery {
  studentId: string
}

const Student: React.FC<Props> = ({ }) => {
  const router = useRouter()
  const { studentId } = router.query as IParams

  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    fetchStudent(studentId).then(res => setStudent(res))
  }, [studentId])

  return (
    <Box direction="column" pad="medium" overflow="auto">
      <Box direction="column" height="xlarge" width="35%" justify="center" alignSelf="center" wrap={false}>
        <Box direction="row" align="center" wrap={false}>
          <Avatar src={student?.avatar} size="xlarge" />
          <Box direction="column" wrap={false}>
            <h3>{student?.first_name} {student?.last_name}</h3>
            <span>{student?.email}</span>
            <span>{student?.job}</span>
            <span>{student?.company}</span>
          </Box>
        </Box>
        <Button primary label="back" icon={<LinkPrevious />} fill={false} onClick={() => router.back()} />
      </Box>
    </Box>
  );
};

export default Student;
