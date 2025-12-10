import Link from "next/link";

const HeaderBreadcrumb = ({pageTitle}) => {
    return (<>    
    <section className="page-header">
        <div
        className="page-header__bg"
        style={{
            backgroundImage: "url(/images/footer.jpg)"
        }}
        />
        <div className="container">
        <div className="page-header__content">
            <h2 className="page-header__title">{pageTitle}</h2>
            <ul className="aigence-breadcrumb list-unstyled">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <span>{pageTitle}</span>
            </li>
            </ul>
        </div>
        </div>
    </section>
    </>)

}
export default HeaderBreadcrumb;