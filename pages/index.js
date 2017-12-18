import Link from "next/link";
import Layout from "../comps/MyLayout";

const PostLink = (props) => {
    return (
        <div>
            <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}><a>{props.title}</a></Link>
        </div>
    )
};

const Index = ()=>(
    <Layout>
        <h2>My Blog</h2>
        <PostLink id={'hello-next'} title={'Hello Next'}/>
        <PostLink id={'learn-next'} title={'Learn Next'}/>
        <PostLink id={'deploy-next'} title={'Deploy app with Zeit'}/>
    </Layout>
);

export default Index;