import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';
import { FaHome } from 'react-icons/fa';

const BreadCrumb = () => {
    const location = useLocation();
    // Split the path into segments
    const paths = location.pathname.split("/").filter((path) => path);
    return (
        <>
            <Breadcrumb style={{ display: "flex", alignItems: "center", gap: "0.3rem", listStyle: "none", color: "#063e3e", }}>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/" className='hover:text-blue-500'><FaHome size={18} /></Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {paths.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    const to = `/${paths.slice(0, index + 1).join("/")}`;

                    return (
                        <React.Fragment key={to}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <span className=' text-xs font-bold text-[#076161]'>{path.replace(/-/g, " ").toUpperCase()}</span> // Show plain text for the last item
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link className=' text-xs font-bold text-[#076161] hover:text-blue-500' to={to}>{path.replace(/-/g, " ").toUpperCase()}</Link> // Replace dashes with spaces for readability
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    );
                })}
            </Breadcrumb>
        </>
    );
}

export default BreadCrumb