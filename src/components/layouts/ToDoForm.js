import React ,{useState,useEffect} from 'react'
import { Formik, Form, Field } from "formik";
import axios from "axios"


export default function ToDoForm() {

    const toDoTypeAPI="http://localhost:8080/api/v1/todos/types";
    const [toDoTypes,setToDoTypes] = useState([])

    useEffect(() => {
        axios.get(toDoTypeAPI).then((res) => {
          setToDoTypes(res.data);
          console.log(res.data);
        });
      }, [toDoTypeAPI]);
    return (
        <Formik
        initialValues={{
          description: "",
          creationTime: new Date(),
          expiringDate: "",
          estimatedDays: "",
          allocatedTime : "",
          statusId: "1",
          typeId: "",
        }}
        onSubmit={(values) => {
          console.log(values.totalAmount);
          axios
            .post("http://localhost:8080/api/v1/todos", values)
            .then((res) => {
              if (res.status === 200) {
                console.log("succes");
                console.log(values);
              }
            });
        }}
      >
         {({ values, setFieldValue }) => (
             <div>
                 <Form>
                    <div>
                        <Field name="description" placeholder="What's going on?"/>
                    </div>
                    <div>
                        <h5>Expiring Date</h5>
                        <Field name="expiringDate"
                        type="datetime-local"/>
                    </div>
                    <div>
                        <h5>Estimate your time</h5>
                        <Field name="estimatedDays"/>
                    </div>
                    <div>
                        <h5>Select the type of task</h5>
                        <Field
                      as="select"
                      name="typeId"
                      className="typeSelect "
                    >
                      {toDoTypes.map((type, index) => (
                        <option
                          className="selectOptions"
                          value={type.id}
                          key={index}
                        >
                          {type.type}{" "}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <input className="btn_1" type="submit"></input>
                 </Form>
             </div>
         )}


      </Formik>

        
    )
}
