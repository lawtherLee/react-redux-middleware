import React, { useEffect } from "react";
import avatar from "../assets/back.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setNewsAction } from "../store/actions/news";

export default function NewsList() {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.channels);
  const { news } = useSelector((state) => state.newsList);

  useEffect(() => {
    dispatch(setNewsAction(active));
  }, [active]);

  return (
    <div className="list">
      {news.map((item) => (
        <div className="article_item" key={item.art_id}>
          <h3 className="van-ellipsis">{item.title}</h3>
          <div className="img_box">
            <img src={avatar} className="w100" alt="" />
          </div>
          <div className="info_box">
            <span>{item.aut_name}</span>
            <span>0评论</span>
            <span>2018-11-29T17:02:09</span>
          </div>
        </div>
      ))}
    </div>
  );
}
