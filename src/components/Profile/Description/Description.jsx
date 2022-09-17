import React from "react";
import s from "./Description.module.css"

const Description = () => {
  return(
    <div className={s.info}>
      <div className={s.cover}>
        <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg" />
      </div>
      <div className={s.wrapper}>
        <div className={s.avatar}>
          <img src="https://www.interfax.ru/ftproot/photos/photostory/2021/06/11/week4_1100.jpg" />
        </div>

        <div className={s.descr}>
          какая-то инфа о пользователе <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ex similique repellendus pariatur accusamus atque in placeat, iusto dolore distinctio rem quia voluptate reiciendis aliquam eum nam molestias. Pariatur, vitae?
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat a consequatur nam aspernatur illo ducimus culpa? Saepe, natus. Iste nam animi dolorum at doloribus harum possimus, pariatur blanditiis sapiente.
          <br /> A obcaecati numquam explicabo commodi, provident voluptatibus magni sunt ratione asperiores pariatur tempore optio alias fugiat laborum assumenda aperiam saepe eveniet autem qui iusto ad. Veritatis qui hic animi doloremque.
          <br /> Quam architecto molestiae cumque libero ex accusantium voluptatem quo excepturi reprehenderit, similique necessitatibus iste. At eum quia possimus officia veniam incidunt nobis fuga ratione consectetur. Recusandae aliquam quasi vero cumque.
          <br /> Sunt voluptas et provident at, vero ipsam odio reiciendis totam dicta. Dolores id molestiae voluptatibus officia non eius pariatur, omnis ex laborum cum optio ea nihil, in veniam, enim velit.
        </div>
      </div>
    </div>
  );
}

export default Description;