import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { ListBlogsRequest } from "../../state/api-models/blogs";
import { blogsActions } from "../../state/ducks/blogs";
import { IRootState } from "../../state/ducks/reducers";
import { InputText, useForm } from "../common/Form";
import Layout from "../common/Layout";
import Pagination from "../common/Pagination";
import Item from "./Item";
import { ButtonSearch } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation(["home"]);

  const blogList = useSelector((state: IRootState) => state.blogs).blogs;

  const [pagination, setPagination] = useState({
    search: "",
    page: 1,
  });

  const formbag = useForm({
    initValues: {
      search: "",
    },
  });

  const callApiGetBlogList = useCallback(
    (data: ListBlogsRequest) => {
      dispatch(blogsActions.getBlogList.request(data));
    },
    [dispatch]
  );

  const search = window.location.search;

  const getData = useCallback(
    (page: null | string, search: null | string) => {
      setPagination({
        page: page ? Number(page) : 1,
        search: search || "",
      });
      callApiGetBlogList({ page, search: search || "" });
    },
    [callApiGetBlogList]
  );

  useEffect(() => {
    const params = new URLSearchParams(search);
    const page = params.get("page");
    const searchParam = params.get("search");
    getData(page, searchParam);
  }, [getData, search]);

  const data = useMemo(() => blogList.blogs.response, [blogList]);

  const isLoading = useMemo(
    () => blogList.blogs.loading,
    [blogList.blogs.loading]
  );

  const onNextPage = (page: number) => {
    onChangePage(page);
  };

  const onPreviousPage = (page: number) => {
    onChangePage(page);
  };

  const onChangePageNumber = (page: number) => {
    onChangePage(page);
  };

  const onChangePage = (page: number) => {
    history.push({
      pathname: "/",
      search: `?page=${page}${
        pagination.search ? `&search=${pagination.search}` : ""
      }`,
    });
  };

  const onSearch = () => {
    const valueSearch = formbag.watch("search");
    history.push({
      pathname: "/",
      search: `?page=1${valueSearch ? `&search=${valueSearch}` : ""}`,
    });
  };

  return (
    <Layout>
      <FormProvider {...formbag}>
        <InputText title={t("home:search")} name="search" />
        <ButtonSearch
          type="button"
          className="btn btn-primary"
          onClick={onSearch}
        >
          {t("home:search")}
        </ButtonSearch>
      </FormProvider>
      <ul className="list-unstyled">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {data.length > 0
              ? data.map((item, index) => {
                  return (
                    <Item
                      id={item.id}
                      img={item.image}
                      content={item.content}
                      title={item.title}
                      key={`blogs${index}`}
                    />
                  );
                })
              : "Empty"}
          </>
        )}
        {data.length > 0 && (
          <Pagination
            currentPage={pagination.page}
            onNext={onNextPage}
            onPrevious={onPreviousPage}
            onChangePage={onChangePageNumber}
          />
        )}
      </ul>
    </Layout>
  );
};

export default Home;
