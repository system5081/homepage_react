import React from 'react'
import pythontImage from "../Images/Python.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/seabass.jpg";
import movieImage from "../Images/movie3.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';



const HomePage = () => {
  return (
    <div className="container text-center">

      <div className='test'>
      <h1>system5081</h1>

      <img src={profileImage} className="profileImage" alt="プロフィール" />

      <p>趣味で個人用アプリケーション開発をしてます。</p>
        <p>デジタル技術系の備忘録としてのBlogを始めました。<br/>今年から趣味の釣りの記録用のページを始めようと思い準備中です。シーズンまで後少し!!</p>
      <br/>
      </div>
      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">List of Application</h2>
            <br />
            <h4 className="section-subheading text-muted mb-5">
              私が制作（中）のアプリケーションです
            </h4>
          </div>
          <div className="col-md-4">
            </div>
          <div className="row text-center" >
            <div className="col-md-4 ">
                <div className='center-col test'>
                <a className="apptitle " href='https://moviereact.system5081.com'>
                  <br/>
                  <h4 className="my-3">動画アプリケーション</h4>
                  <br />
                  <img src={movieImage} className="img-fluid" alt="動画アプリケーションの画像"/>
                </a>
                <p className='center-col2'>
                  <br/>
                  　動画を扱うアプリケーション。
                  認証済みユーザに限定公開するために今後の開発を進めていきたい。<br /><br /><br/>
                  <DevicesIcon />　React<br/>
                  <a className="apptitle " href='https://github.com/system5081/movie_react18'>　<GitHubIcon />movie_react18<br /></a>
                  <StorageIcon />　DjangoRF<br/>
                  <a className="apptitle " href='https://github.com/system5081/test_api'>　<GitHubIcon />test_api<br /></a><br/>
                  
                  </p>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className='center-col test'>
                <a className="apptitle " href='#'>
                  <br/>
                  <h4 className="my-3">CSV計算機</h4>
                  <br />
                  <img src={movieImage} className="img-fluid" alt="動画webアプリケーションの画像"/>
                </a>
                <p className='center-col2'>
                  <br/>
                  　特定の計算話するために開発。
                  アプリケーションまで作りましたが、エンジニアが扱うわけではないので保守しやすい方が良さそうと考えています。<br /><br />
                  <DevicesIcon />　React<br/>
                  <a className="apptitle " href='https://github.com/system5081/csv_react'>　<GitHubIcon />csv_react<br /></a>
                  <StorageIcon />　DjangoRF<br/>
                  <a className="apptitle " href='https://github.com/system5081/csv_api'>　<GitHubIcon />csv_api<br /></a><br/>
                  </p>
                </div>
            </div>
            <div className="col-md-4 ">
                <div className='center-col test'>
                <a className="apptitle " href='#'>
                  <br/>
                  <h4 className="my-3">Instaクローン</h4>
                  <br />
                  <img src={movieImage} className="img-fluid" alt="動画webアプリケーションの画像"/>
                </a>
                <p className='center-col2'>
                  <br/>
                  　ユーザ間のやり取りについて学ぶために開発
                  作ってはみたものの、あまり活用できそうなところはなかったかもしれません。<br /><br />
                  <DevicesIcon />　React<br/>
                  <a className="apptitle " href='https://github.com/system5081/csv_react'>　<GitHubIcon />csv_react<br /></a>
                  <StorageIcon />　DjangoRF<br/>
                  <a className="apptitle " href='https://github.com/system5081/csv_api'>　<GitHubIcon />csv_api<br /></a><br/>
                  </p>
                </div>
            </div>
            </div>
          </div>
      </section>
        </div>
  )
}

export default HomePage
