import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {marked} from "marked"
import Link from "next/link"

export default function PostPage({frontmatter: {title, date, keyFilter, spoiler}, slug, content}){
    return (
    <section>
        <Link href="/"><a className="button m-top30">VOLTAR</a></Link>
        <div style={{display: "flex", alignItems: "center"}}>
            <h1 style={{fonteSize: "sans serif"}}>{title}</h1>
            <div>{date}</div>
        </div>
        <div>{keyFilter}</div>
        <main>
            <div dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
        </main>
    </section>)
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.md', '')
        },
    }))
    return{
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md' ), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return{
        props: {
            frontmatter,
            slug,
            content,
        }
    }
}