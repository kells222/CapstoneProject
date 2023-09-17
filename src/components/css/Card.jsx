// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Posts from '../Posts';
// import { useState } from 'react';
// import axios from 'axios';


// function CardHandle({props}) {
//     const [post,setPost] = useState('')

//     const cardPost = () => {
//         axios.get('https://fakestoreapi.com/products/{id}')
//         .then(res=>{
//             console.log(res)
//             setPost(res.data);
//         })
//         .catch (err=>{
//             console.log('error fetching posts', err)
//         })
//     }
//     cardPost(props);

//   return (
//     <Card style={{ width: '700px' }}>
     
//       <Card.Body>
//         <Card.Title>{post.title}</Card.Title>
//         <Card.Text>
//           <Posts post={post}/>
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>



//   );
// }

// export default CardHandle;