import React, { ChangeEvent, useState } from 'react'
import AdminSidebar from '../../components/admin-sidebar'

const NewProduct = () => {

    const [name,setName] = useState<string>("");
    const [price,setPrice] = useState<number>();
    const [stock,setStock] = useState<number>();
    const [photo,setPhoto] = useState<string>();

    const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        
    }

  return (
    <div className='admin-container'>

        <AdminSidebar/>
        <div className="product-management"> 
            <article>
                <form action="">
                    <h2>New Product</h2>
                    <div>
                        <label>Name</label>
                        <input 
                            required
                            type="text" 
                            placeholder='Name' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input 
                            required
                            type="number" 
                            placeholder='Price' 
                            value={price}
                            onChange={(e)=>setPrice(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Stock</label>
                        <input 
                            required
                            type="number" 
                            placeholder='Stock' 
                            value={stock}
                            onChange={(e)=>setStock(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Photo</label>
                        <input 
                            required
                            type="file" 
                            onChange={changeImageHandler}
                        />
                    </div>
                    {
                        photo && <img src={photo} alt="New Image"/>
                    }
                    <button type="submit">Create</button>
                </form>
            </article>
        </div>
    </div>
  )
}

export default NewProduct