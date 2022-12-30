export default function Post( {params} ){
    const {id} = params;
    console.log(params)
    return (
        <h1>Post N° {id}</h1>
    );
}