import ListUsers from "../../components/Users/ListUsers";
import Breadcrumb from "../../components/Breadcrumb";



const List = () => {
    return (
        <>
            <Breadcrumb pageName="Usuarios" />
            <ListUsers />
        </>


    );
};

export default List;