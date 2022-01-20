import React from "react";
import { useHistory } from "react-router-dom";

import { ListItem } from "./styles";

type Props = {
  img: string;
  alt?: string;
  content: string;
  title: string;
  id: string;
};

const Item: React.FC<Props> = ({ img, alt, content, title, id }) => {
  const history = useHistory();

  const onClickItem = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      <ListItem className="media" onClick={onClickItem}>
        <img src={img} className="mr-3" alt={alt} />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{title}</h5>
          {content}
        </div>
      </ListItem>
    </>
  );
};

export default React.memo(Item);
