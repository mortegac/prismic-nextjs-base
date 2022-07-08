import React, {useId} from 'react';
import { RichText } from 'prismic-reactjs'
import { PrismicRichText } from '@prismicio/react'
import styles from '../../styles/Home.module.css'


const Post = (props) => {
  const id = useId();

  const { slice:{items} } = props;

  return(
      <>
          {
              Array.isArray(items) ? (

                items.map((item, index) =>
                        <a key={`${id}-${index}`} href="#" className={styles.card}>
                          {console.log('--item--',item)}
                          <h2>{item.title} &rarr;</h2>
                          
                          <p>{
                            item.description ?
                              <PrismicRichText field={item.description}/>
                              : <p>Sin description</p>
                          }</p>
                        </a>
              )

              ):null
          }
      </>
)};

export default Post