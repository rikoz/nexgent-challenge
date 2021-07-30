import { Box, TextInput } from "grommet";
import React, { useEffect, useMemo, useState } from "react";
import UserCard from "../components/user.card";
import { fetchStudents, Student } from "../services/students";

type Props = {};

const Main: React.FC<Props> = () => {
  const [search, setSearch] = useState<string>('')
  const [students, setStudents] = useState<Student[]>([])

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  const filteredStudents: Student[] = useMemo(() =>
    !search ?
      students
      :
      students.filter(({ first_name, last_name }) => first_name.toLowerCase().includes(search) || last_name.toLowerCase().includes(search))
    , [search, students])

  useEffect(() => {
    fetchStudents().then(res => setStudents(res))
  }, [])

  return (
    <Box direction="column" pad="medium" height="100%" overflow="auto">
      <TextInput placeholder="type here" value={search} onChange={(e) => onChangeHandler(e)} />
      <Box direction="row" wrap={true}>
        {filteredStudents.map((s) => (
          <Box margin="10px" key={s.id}>
            <UserCard user={s} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Main;
