
                <div className={"mv-list"} key={i}>
                    <Link to={"/village/video/" + v.id}>
                        <img style={{width: "3.34rem",height:"auto"}} src={v.cover} alt=""/>
                    </Link>
                    <div className={"mv-list-b"}>
                        <p className={"mv-name"}>
                            {v.briefDesc} || {v.name}
                        </p>
                        <div className={"mv-"}>
                            <img style={{width: ".28rem", borderRadius: "50%", display: "inlineBlock"}}
                                 src=""
                                 alt=""/>
                            <span className={"mv-artistName"}>{v.artistName}</span>
                            <span className={"iconfont right"}>&#xe620;</span>
                            <span className={"mv-playCount right"}>赞</span>
                        </div>
                    </div>
                </div>
