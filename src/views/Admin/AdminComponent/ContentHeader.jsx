import React from "react";
const ContentHeader = ({ headertitle, hasbreadcrumb, breadcrumbsub }) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{headertitle}</h1>
          </div>
          {hasbreadcrumb && (
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="#">{breadcrumbsub}</a>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
