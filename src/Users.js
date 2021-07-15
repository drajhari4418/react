import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
function Users() {
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2").then((data)=>{
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th> first_Name</th>
                        <th> last_name</th>
                        <th>avatar</th>
                    </tr>
                    {
                        user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_Name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.avatar}</td>

                        </tr>
                        )
                    }
                </thead>
                <tbody>
                   
                    
                </tbody>
            </Table>
        </>
    )
}

export default Users