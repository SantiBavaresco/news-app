export default function Post( {params} ){
    const {id} = params;
    return (
        <h1>Post N° {id}</h1>
    );
}