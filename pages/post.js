import Layout from "../comps/MyLayout";

const Content = (props)=>{
    return (
        <div>
            <h2>{props.url.query.title}</h2>
            <p>This is the blog post content page.</p>
        </div>
    )
};

export default (props)=>(
    <Layout>
        <Content url={props.url}/>
    </Layout>
);