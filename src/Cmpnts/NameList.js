import React from 'react'
import PersonInfo from './PersonInfo'

 function NameList() {
    const people =[
        {
            id:1,
            name:'marah',
            age:23,
            job:'developer'
        },
        {
            id:2,
            name:'maya',
            age:23,
            job:'engineer'
        },
        {
            id:3,
            name:'noor',
            age:23,
            job:'developer'
        }
    ]
  const names=['marah','maya','noor']
  //list will be displayed with index
  const nameList= names.map((name,index)=><h2 key={index} > {index} {name}</h2>)
  //key can be anything as long as its unique 
  const person=people.map(info =><PersonInfo key={info.id} info ={info}/>)

  return (
    <div>
        {
            nameList
        }
    </div>
  )
}
export default NameList