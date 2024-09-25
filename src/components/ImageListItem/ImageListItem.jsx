import './ImageListItem.css';

export function ImageListItem({ img }) {
    return (
        <div className='card'>
            <a href={img.url}>
                <img src={img.download_url} className="img" alt={img.id}/>
            </a>
            <div className='card_banner'>
                <img src={img.download_url} className='card_thumb' alt={img.id} />
                <div className='card_text'>
                    <h3 className='card_title'>{img.author}</h3>
                    <div className='card_status'>
                        Taille originale : {img.height}x{img.width}
                    </div>
                    <button>Télécharger</button>
                </div>
            </div>
        </div>
    )
};