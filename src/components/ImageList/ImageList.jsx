import { ImageListItem } from '../ImageListItem/ImageListItem';
import './ImageList.css';

export function ImageList({ imgList }) {
    return (
        <div>
            {imgList.map((img, index) => {
                return (
                    <div key={index} className='card_item'>
                        <ImageListItem img={img} />
                    </div>
                )
            })}
        </div>
    )
};