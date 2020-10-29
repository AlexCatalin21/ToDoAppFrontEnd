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

      function formatDateForInput(date = null, addOne) {
        // eslint-disable-next-line no-extend-native
        Number.prototype.AddZero = function (b, c) {
          const l = String(b || 10).length - String(this).length + 1;
          return l > 0 ? new Array(l).join(c || "0") + this : this;
        };
    
        let d = date === null ? new Date() : new Date(date);
        if (addOne) d.setDate(d.getDate() + 1);
        return (
          [
            d.getFullYear(),
            (d.getMonth() + 1).AddZero(),
            d.getDate().AddZero(),
          ].join("-") +
          "T" +
          [d.getHours().AddZero(), d.getMinutes().AddZero()].join(":")
        );
      }

      const minCheckInDateTime = () => {
        return formatDateForInput(null, false);
      };
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
                    window.location.reload();
                  }
                }
              
            );
            
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
                        type="datetime-local"
                        min={minCheckInDateTime()}/>
                    </div>
                    <div>
                        <h5>Estimate your time (Days) </h5>
                        <Field name="estimatedDays"/>
                    </div>
                    <div>
                        <h5>Select the type of task</h5>
                        <Field
                      as="select"
                      name="typeId"
                    >
                      {toDoTypes.map((type, index) => (
                        <option
                          value={type.id}
                          key={index}
                        >
                          {type.type.replace("_"," ")}{" "}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <input className="sortButton" type="submit"></input>
                 </Form>
             </div>
         )}


      </Formik>

        
    )
}
