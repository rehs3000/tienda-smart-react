import { Item } from "../Item/Item";


export const ItemDetail  = ({item}) => {

return <Item {...item}> 
<button className="btn primario"> Agregar al carrito</button>
</Item>
};