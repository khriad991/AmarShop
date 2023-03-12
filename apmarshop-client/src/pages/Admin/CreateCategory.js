import React, { useEffect, useState} from 'react';
import AdminMenu from "../../componets/layout/AdminMenu";
import Layout from "../../componets/layout/Layout";
import axios from "axios";
import cogoToast from "cogo-toast";


const CreateCategory = () => {
    const {categories ,setCategories} = useState([])

    // get all category ----->>>
    const getAllCategory = async ()=>{
        try{
            const {data } = await axios.get('http://localhost:5000/api/v1/product/get-product')
                if(data.success){
                   await setCategories(data?.category)
                }
        }catch(err){
           console.log(err)
            cogoToast.error('Something wrong in Category')
        }
    }

    useEffect(() => {
        getAllCategory()
    }, []);

    return (
        <Layout title={'Dashboard Create-Category'}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3"><AdminMenu/></div>
                    <div className="col-md-9">
                        <h3>Manage Category</h3>
                        <div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>

                                </thead>
                                {/*<tbody>*/}
                                {/*        {*/}
                                {/*            categories?.map((c)=>{*/}
                                {/*                <Fragment>*/}
                                {/*                    <tr>*/}
                                {/*                        <td key={c._id}>{c?.name}</td>*/}
                                {/*                        <td>*/}
                                {/*                            <button   className="btn btn-primary ms-2">Edit</button>*/}
                                {/*                            /!*<button className="btn  btn-danger ms-2">Delete</button>*!/*/}
                                {/*                        </td>*/}
                                {/*                    </tr>*/}
                                {/*                </Fragment>*/}
                                {/*            })*/}
                                {/*        }*/}
                                {/*</tbody>*/}

                                <tbody>
                                {categories?.map((i,c) => (
                                    <>
                                        <tr>
                                            <td key={c._id}>{c.name}</td>
                                            <td>
                                                <button className="btn btn-primary ms-2">Edit</button>
                                                <button className="btn btn-danger ms-2">Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                                </tbody>

                             </table>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateCategory;