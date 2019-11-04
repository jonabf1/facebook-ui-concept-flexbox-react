import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io'
import { TiThumbsUp, TiMessage } from 'react-icons/ti'

export default function PostItem({ data }) {

  return (
    <div className="postItem">
      <div className="box-content-profile">
        <img src={data.author.avatar} />
        <div className="box-profile">
          <strong className="title">{data.author.name}
            {data.author.group ?
              (<><IoMdArrowDropright color="gray" size={22} />
                <strong className="title">{data.author.group}</strong></>) : null}</strong>
          <small>{data.date}</small>
        </div>
      </div>

      <p className="content">{data.content}</p>
      <div className="bar-options">
        <div className="bar-informations">
          <div className="like">
            <div className="like-circle">
              <TiThumbsUp size={20} color="white" />
            </div>
            <p>5</p>
          </div>
          <div className="informations">
            <p>{data.commentSize} {data.commentSize >= 2 ? ('comentários') : ('comentário')}</p>
            <p>{data.share} {data.share >= 2 ? ('compartilhamentos') : ('compartilhamento')}</p>
          </div>
        </div>
        <ul>
          <li>
            <TiThumbsUp size={25} color="gray" />
            <strong>Curtir</strong>
          </li>
          <li>
            <TiMessage size={25} color="gray" />
            <strong>Comentar</strong>
          </li>
        </ul>
      </div>

      <div className="box-all-comments">
        {data.comments.map(comment =>
          (
            <div className="box-comment">
              <img src={comment.author.avatar} />
              <div className="comment">
                <strong className="title-comment">{comment.author.name}</strong>
                {comment.content}
              </div>
            </div>

          )
        )}
      </div>
    </div >
  )
}