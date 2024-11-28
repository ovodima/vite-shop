import { useParams } from 'react-router-dom'
import products from '../products'


export default function ProductScreen() {
    const {id: productId} = useParams()
    const product = products.find(p => p._id === productId)
  return (
    <div>ProductScreen</div>
  )
}
