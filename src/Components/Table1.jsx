import React from 'react';
// import { Link } from 'react-router-dom'

function RenderingArrayOfObjects(){
const data=[
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
]
const tableRows=data.map(
	(element,index)=>{
		return(
			<tr key={index}>
			<td>{element.Name}</td>
			<td>{element.Age}</td>
			<td>{element.Course}</td>
			<td>{element.Batch}</td>
			<td><button>{element.Change}</button></td>
			</tr>
		)
	}
)
return(
	<div id='tableHead'>
		<table >
			<thead>
			<tr>	
				<th> Name</th>
				<th>Age</th>
				<th>Course</th>
				<th>Batch</th>
				<th>Change</th>
			</tr>
			</thead>
			<tbody>
			{tableRows}
			</tbody>
		</table>	
			
	</div>
)
}
function Table1() {
return (
	<div>
		<RenderingArrayOfObjects />
	</div>
);
}

export default Table1;