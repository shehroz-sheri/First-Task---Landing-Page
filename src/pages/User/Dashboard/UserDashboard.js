import React from 'react'
import Navbar from '../../../components/Header/Navbar'

export default function UserDashboard() {
    return (
        <>
            <div style={{ background: 'url(https://s3-alpha-sig.figma.com/img/ea07/9bac/af062c107b8633ff76c96b82dda3f5fc?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RjAUh2RSqb2LzRGkEX1zpbXSfePROPQCLyV9OmqNAZiPShlSc6im7mCNOkQs7tViN0ge-GOob248sUI9QiFnk~6FA3YeDYwHbt83qwx5nMY7OX562cYJtCSJDp3LEKVODbygCpyFpYgjIY~IwGyd8-X23jPfTehzF4Nj8eAr~IlL6rUsDqBQe6om3OHyTUfPr-o-yQsfZ4Sn42r9mts6DJdXsouV~IljE8cuzqNxXxdqLVYZoyyu4Eh2BTYWCdfoKqANcnk05sKwy4zE~9ufP6ii3VF9ur-10vzwdL6p3XSzxdLxH8Nws98V~npPWdKzOU9BcNFcTVBGFRUa-ob6jQ__)', backgroundSize: 'cover' }}>
                <Navbar />
            </div>

            <h1 className='text-center fw-bold my-5 pt-4'>This is User Dashboard</h1>
        </>
    )
}
