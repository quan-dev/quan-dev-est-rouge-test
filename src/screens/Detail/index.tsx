import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { blogsActions } from "../../state/ducks/blogs";
import { IRootState } from "../../state/ducks/reducers";
import Layout from "../common/Layout";
import { Image } from "./styles";

const Detail = () => {
  const dispatch = useDispatch();
  const param: any = useParams();

  const blogDeatil = useSelector((state: IRootState) => state.blogs).blogs
    .detail;

  const callApiGetBlogDetail = useCallback(
    (id: string) => {
      dispatch(blogsActions.getBlogDetail.request({ id }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (param.id) {
      callApiGetBlogDetail(param.id);
    }
  }, [callApiGetBlogDetail, param.id]);
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Image src={blogDeatil.response.image} />
            </div>
            <div className="col-8">
              <b>{blogDeatil.response.title}</b>
              <p>{blogDeatil.response.content}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
