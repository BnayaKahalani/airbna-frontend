import { Link } from 'react-router-dom'
import { Rating } from './rating'
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const StayPreview = ({ stay }) => {

  // const onUpdateStay = () => {
  //   stay.likedByUsers.push(user.fullname)
  //   dispatch(updateStay(stay))
  // }

  // const handleHover = (ev, value) => {
  //   ev.stopPropagation();
  //   ev.nativeEvent.stopImmediatePropagation();
  // }

  return <section className="stay-preview">
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-size": "10px",
          "--swiper-navigation-size": "12px"
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper">
        <div slot="container-start"></div>
        {stay.imgUrls.map((img, idx) =>
          <SwiperSlide key={idx} >
            <Link to={`/stay/${stay._id}`}>
              <div className='title' data-swiper-parallax="-300">
                <div className='preview-img-container'>
                  <img className='main-img' src={img} alt='preview' />
                  <FavoriteIcon className='preview-unlike-btn' />
                  <FavoriteIcon className='preview-like-btn' />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </>

    <div className="preview-title">
      {stay.name.length > 25 ? <h1>{stay.name.substring(0, 25) + '...'}</h1> : <h1>{stay.name}</h1>}
      <div className='preview-rating'>
        <Rating ratingCount={stay.reviews.length} rate={stay.rate} />
      </div>
    </div>
    <div className="preview-subtitle">
      <p>Hosted by {stay.host.fullname}</p>
      <p>Oct 9 - 11</p>
    </div>
    <div className="preview-price">
      <p><span >${stay.price.toLocaleString('en-US')}</span> night</p>
    </div>
  </section>
}