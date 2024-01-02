import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveAction, setChannelsAction } from "../store/actions/channels";

export default function Channel() {
  const dispatch = useDispatch();

  // 页面加载获取数据
  useEffect(() => {
    dispatch(setChannelsAction());
  }, []);

  const { list, active } = useSelector((state) => state.channels);
  return (
    <ul className="catagtory">
      {list.map((item) => (
        <li
          onClick={() => dispatch(setActiveAction(item.id))}
          key={item.id}
          className={item.id === active ? "select" : ""}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
