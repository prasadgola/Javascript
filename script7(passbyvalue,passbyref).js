		        /*|variable|Value|Adress |Value  |PassByType|*/
let b = 2       /*|   b    |  2  |       |       |   value  |*/
let c = a 		/*|   c    |  a  |       |       |   value  |*/
let a = 1       /*|   a    |  1  |       |       |   value  |*/
let d = [1,2]	/*|   d    |<001>|<0x01>  |[1,2]  |    ref   |*/
let f = d 		/*|   f    |  d  |<0x01>  |[1,2]  |    ref   |*/
f.push(3)		/*|   f    |<001>|<0x01>  |1,2,3] |    ref   |*/
console.log(d)	/*|   d    |<001>|<0x01>  |1,2,3] |    ref   |*/