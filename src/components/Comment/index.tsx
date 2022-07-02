import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './comment.module.css';

interface CommentProps {
  content: string;
  handleDeleteComment: (comment: string) => void;
}

export function Comment({ content, handleDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(() => {
      return likeCount + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/gusprado.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>An author...</strong>
              <time title='23 de Junho 20:40' dateTime='2022-06-23 20:40:00'>
                Sometime ago...
              </time>
            </div>

            <button
              onClick={() => handleDeleteComment(content)}
              title='Remover comentário'
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
