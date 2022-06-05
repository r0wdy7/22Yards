import {Link,useLocation} from 'react-router-dom'
import { useState } from 'react'
import Comment from './Comment'
import DefaultImageURL from '../../../Util/Icons/index'

export default function PostCard({post}){
    const [isPostLiked,setPostLike]=useState(false)
    const [isPostStarred,setStarPost]=useState(false)
    const [isCommentRedirected,setRedirectToComment]=useState(false)
    const [isImageLoading,setImageLoading]=useState(true)
    const location=useLocation();
    function handlePostStar(){
        setStarPost(!isPostStarred)
    }
    
    function handlePostLike(){
        setPostLike(!isPostLiked)
    }

    function handleCommentRedirect(){
        setRedirectToComment(!isCommentRedirected)
    }
    
    return(
        <div className='feed-card-container'>
            <div className="feed-cards">
                <div className="post-card">
                    <img
                        className='feed-main-card-img'
                        src="/22YardsLOGO.png"
                    />
                    
                    <img
                        className='feed-main-card-img'
                        src={post.link}
                        style={{display: isImageLoading?"none":"block"}}
                        onLoad={()=>{setImageLoading(false)}}
                    />
                    
                </div>
                <div className='post-card-body-container'>
                    <Link to={{
                            pathname:`/feed/${post.id}`
                            }}
                        state={{post:post,prevPath:location.pathname}}
                        style={{ textDecoration: 'none',color:'black' }}>
                        <h4 className='post-card-user-handle'>{post.user}</h4>
                        <p className='post-card-para'>
                                {post.content}
                        </p>
                    </Link>
                    <div className="post-card-footer">
                        
                        <img className="feed-content-card-footer-icon" onClick={handleCommentRedirect} src="data:image/png;base64,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"/>
                        {  !isPostLiked &&
                        <img className="feed-content-card-footer-icon" onClick={handlePostLike} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAJOklEQVR4nO2be4xcVR3HP79zZ3YLoaXbxvAorUHRAq00zWTm3rtddACNFEsAY5VQXiLRiICPKg8NCBhteAQRjfhCG15CV9BapRQQq9mde2eGqVDaANYiWKsFtAss7HPu+fnHztbJdh7b3e0uu/SbTObO73zv75zzzT2P+zu/gQM4gAN4J0MmugEjgPi+Pz+KoiOBNxzH2RoEQXclouu6hxljjgS6Gxsb/7Zx48biXs72d2vHEMbzvC8AVwBHldl7VXW9MebmIAgyruvOEJHPAxcCx5bxXgfu7u/vv75QKPxn0DgpBEgkEvFYLLZGRM4EHhORe1T1HyIyU1VbgPOAd6nqWhHxgMNE5I/AOlXdDsxQ1ZNFZAXwquM4H25vb38eJlCAVCp1suM4PX19fU8VCoWuWlzf929W1ZUicnkQBD8YWp5IJA5uaGi4SlWvAjYBl4RhuGkoz3XdE4wxj6hqV1dX16LNmze/NSEC+L6fUtVs6Wc3cF9/f/81hULh30O5qVTqaGPMX4GfhmF4SR2/s4IgeA2w1TjNzc2+tbYNuCEMw+vNKPoxGiwsfX8auBM4Jx6Pb3JdNzGUKCIXArEoim6p5zQIgt3U6DxAJpMJgCdE5HOATIgA1tpjgZ65c+feHYbhZY7jLBaRLmPMumQyeXg5V0Q+BGzK5/MvjFX9InK/qh7R3Ny8YEIEEJH5wLbW1tYIoL29/XlVXaaqTcaY64bQ56nqljFuwrMAURTNm6ghcKyIPF9uCMPwWRG5S0RWpNPpaWVFh4rI62NZuap2lC5njLsAiUTiUOAYVX1qaJm19mHgkK6uroVl5peBw8ayDcaYmQAismvcBYjH40nAANmhZaq6s3RZ3uHt/H/SHBNYaxcBRFG0fSKGgAvY/v7+/NACEVEAx3GkzLYBON513feNYRtOA7bk8/kdEyHAKcCWQqFQaVzPKn3vHjQUi8W1QNEY89mxqNz3/WOAj4lIKww8iuOG0hL3QRF5sFK5MeYIgGKxuGvQls/ndwCrVfXSlpaWeaNtg6reqKpvOI7zfRhnARzHWQ44xpgHqjTuKEB7e3tfLrdHUXQDUCwWi6vT6XRspPX7vn8+8HERWdXW1tYB4ywAcJ6qPjX4IlIBaeCZzZs3v1VuzOfzO0o7t5O6u7tvHknFqVTqZFX9kYg8Gobhnl3luAng+/4pQFJEflil/CCgRVU3VCoPguA+Vb1NRL7ked732Ie2e573YWPMb4GdfX19KyjbLo+bAKp6NbCzqanprkrl1tqTgINE5NFqPrLZ7FeAm4DLPc9b4/v+rGrcQbiuuxJYD2yPoujE8lgAjJMAruu2AKeIyC3r16/vrcQxxpwBvN7Z2fnnGq40DMMrReTLwDJV3er7/lmViKlU6v2e5z0mIrcAj8VisXQ+n981lLffX4cTiUQ8Ho8XgBn9/f3HV3v39zzvGeCFMAzPGI7f5ubmhdba1UACaLfWrsrlcg+7rjsHWFmKCvUCXw3D8GeAVvIT831/sareKyKN+9IxVf1TGIYX1ePFYrGVwAestcuqdT6dTsd6enrmA78Zbv2ZTGZLOp32ent7P6OqVxpjfud53jbg3Qx09udRFK0qLaPV26eqi4DjrLW/NMZ0DqdyVT0RWFqP57ruCSJyLdCay+V+X43X2dk5Mx6Px1V1r0e0FkpBzh+n0+k7u7u7zzbGnKeq60Tk1iAIdtZ1AOxZU0Xk60EQvDicmzzPuwM4sxantON6RFVfjaLo8lrchoaGRlVFRCrOD/VQEuKe0mefsD8mQfF9/yJVfVJVjbX2I5Umn3JYazsBRKRpP7SnJka8qwLigyEsEYkBc4DFwApVPRp43BhzcRiGL9VzlM1m3/A87zlr7VnLly+/dTBQMh4YjQCzReTJIbYI2KCqV2Sz2QepMvNWwXUicv+OHTsKnuf9AegfSaNU1YrICyLyUClGWBMjFkBVXxt8Q1PVHhF50RjzYnt7+7Am0qEIw/AB13V7ROQq4AJGODxFZBpwkKrelEqlPpHL5Z6oxR+xACLSEwRB60jvr4RsNrsWWDtKN8bzvCSw2hjzkOu687PZ7MtVyaOs7O0IG4Zh1lp7NnAoA6dGVTEVBQAgl8s9DXSKyHtq8aasAKV9yHSg5io0JQVoaWmZp6p3A13GmPtrcUezDE4oPM9LA3eISEO5XVVjxWJxLgPH5udmMpmaT8CkFSCKoleNMX9h7z7MBJqAYb3cTVoB8vn8VuCcSmXJZPJwx3HWisjqJUuWBO3t7f+q5mdKzgH5fH5XFEUXAYdEUXR2Le6UFAD2PCGdwHtr8aasAEuWLDmSgWVwr6SLckxJARYsWNAQRdHtQCQiv6rFnbSTYDKZPNwYc66IOOV2VZ0tIsuA41T16jAMn6vlZ9IKYIxZIiI3MuQpFtkT531FRGpugmASC1CKNzhD7S0tLU3FYvE04DZVfWTp0qWLqoXiYQrOAW1tbR1hGN4LnC8i83fv3r28Fn/KCTCIMAw3AG+KSLIWb8oK4Pt+IwPb4Yp5xIOYsgIAXwPixpiHa5Em3STo+/4coLkGZbqqnqqqy4H7MplMrbPGySeAtfaaUq5ALXSJyLcaGxtvqOdvNFHhab7vLy9dv6mqHaq6e/bs2S/VWnZGi1mzZn2xo6PjJ6q618GuMWa+qn4TOEpE1lT6f8BQjCYqPFNV15T9RkTo6Ojo8zzvaSBrrf11LpfbSJ383X1BSdy9MsFLKDQ3Nz9urd1qrb0W+GQ9f6MZAv9V1Y/CwMlQ6VirSVUXMpAKd4Ex5lLP8/4pIr9wHOe7g3k5+xOZTOYVz/PWMYzDWxidAP3ZbLZQrTCdTk/r7e09XVXPVdVvFIvFS13XvalYLN5e7/8Bo0XpqG5Yp1J7BDDGzEsmk8NdFmfUI2zcuLEHaAVaS8kM3xGRVfF4/DLXdW8F7ql1YDFS+L4/x1p7OgNpMXUhnud9Cqj70lABfw/DsGbMvULjmlX12wxkg8FA1nabiGyz1u4yxryiqpGq9lBnA1MBcRFZDFwNzFTVRDab3VbvJlmwYEHD9OnTT93XDBEReTaTyYwojd113eOBpSKSZmBNr5vsNFyUkrAvrjU8y/G2+NNUIpE4OBaLzQFmGGNmVlri6kFENIqiHblcbhv7dip9AAdwAO9g/A8IV8lvdy1augAAAABJRU5ErkJggg=="></img>
                        }
                        {  isPostLiked &&
                        <img className="feed-content-card-footer-icon" onClick={handlePostLike} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGY0lEQVR4nO2aa2wcVxXHf+fO7jiOt87LjiMezcNtbSckhRRoGpW2rkQT50ugaiwVIqRIRVSoEBVocYGgTUIphRAFgURdQUurVohUAorychs1RBVykYCmVGs7dUFRiqI2DTFJHNu7OzOHD+4669fMPrxeOuz/055z//fcM3/de+7svQMVVFBBBf/HkHInkC9Obt/xCR2Wr3iwFNGBGhN59upzLb+V59rdbN6F+/cuTJr07YL3YVSGPGN1N+x54O8T471vBEhsidsy3zk+nHbWKYoILJhbQ6zKRpR+EXbV7e145p37H1lhhF0g7UB0XBDhqLFk26IffvNfV1zvEyTu+U7fsJNuGrWExVfVUB0d/3wq0i2q1wNzp4sjcMp13XUNP/n2OwCR0qXsD+09vAFYi+oxWbnpFT/uyS9+96FL6WRTxo7Z9qSHBxDVmwLHhWUmYu0D7gYweWc+UzDcjfB9jHRr3+GX9Y0DK6ajptT9WrZ9VbVd3NjKloGv71k6mkb50JT1+2Y8q1t7Dy+bSDr75Xgs5Th1Gdsygm1ZxY5tOepshHIKoOMEAFiM8ORE2uUUH9EsO2pZzETpUmQ5lEkAff1oA7BgiqbbtO/gx7MdaYsPZNtGZiZlQWuhXDMg6nxs2ja1bs02BfqybddzmREob0O5BBC90adtSbZ5TSd9RhhbBY7roejkfvnjDSiXACp+Aoxb4ELci1qRUxnbVSXleMVmkI5WaReUQQBN7LeB6fdrz5yf6Ipa5olsezCZLC4HODD/Bw8NQDlmgJl3B+j8advFe3uiq7lz9/eilnUhYw8mUzhewbPAU9g5lk6hUQqGeO3+BHNmKu/ciH3fle1POT80BAXUAlF+2rC347Wx0fKOUAT0rf3VwGYfikPU6p6q4drO+DOxKvvZjD2cSnNxJJXf+CLdi+aNPJjtm90ZMBi7B6j1YbwijZ++MF1jc+eurdURe0yggaEhBlM514NXPTGfkXh8nGqzJoAm9tsI3wigdQXFWfWL3etjtv37zHI4PzjMpZEgEfS4FaV1yZ4Hzk5smb0ZYMW2glzty1Hv+VxCNT+++7O1c+Zsj1gmre/Vg3cHB/F0Uk1wFHm0rjZ5x8JHO6acWbNyHqD9h2pxpQf4oA/t39LcVufTPgn/3P5ww8jQ8KFhx1mrqhhjmF89Z/SQBF5Wz/rq4n0PnvCLEQG4ffefGj2x6jPOKit6zpU5vhXGGTl75o/xVienTF15BP+HB5VETrGysGL0UOOGxJfiK/Gcx5NOev1gMnlRPY03/jy+L5cYEQDPS3Z5brJxLN/qeoz477O2vaiFCe/pU0F7u9aDd29gJqKT1meuWNUZ7wFuLqRvSU+EtK9rOXj7ya3WFPd6VyBKVgS19+Bq8F4kaOpnIDqvVLn4YcYF0NePNmjvkZ2I+QvQGNhhrKPcqP2HqmY6nyAUvAT23HKubXXv4VsAMNSgLEO0BU23Fhi3HpcntO/5e6V586VC88oXBQvQvCB5H8LoQWZm+9Vid1X5HNibte9IP2ihJx9J4ATKj6Sl7VQQuWzH4j6oAf1okTHWI2zVxJEbZNXGN/2I5TwVLjVqsTQeRAqzAACrgwghF0D7gxhhFiCFxcNBpDAKcAb4A57cJNduejWIHEYBFgNLiLiTb0+nQBgFiACfxDPHNXFkVRA5jAJkUIXl7QwihVkAwKwMZMxGGuWDvhXECLMAiuqPg0hhFeAiyjZp2fRCEPF/8c9QsXgX9DEuu8/lQg7jDKgH2UEs8lf9x4uBp0xhFCCDZpz0jiBSmAUAlVuDKCEXgP8EUcItgJHfBFHCuAsAKMLPuG7DL4OIYRLAARIIT6MclKa2k7l0CtMSiADXo3QgkvMlS8Ez4PRl+8nG2mT6iscsAF3E6Cewa4GaQmMXiXpUnwJaciELwG07X3oz+3LUrq7HmIBLGldbXvjWmikvR/XYsQgNyTUY2kE/D3wo1+xnDMryXO4FSrIEpLXVkZUb/ybNGzto+vNShDtRekox1rSImpwuVkpeA0TinjS1/Y7mS2tQtoGeLvWYICfkmg2Bf4XhvRpgmehRkJExr5rXEKb9WAnAVRnIKyVpd4Ffaf+hX+OyBbgL+BSwMJ84wdDTqPeFnPOa2cHzg2rc0LOuBSPLEa8BtA4kChLLO5h4LkoP0egBvy/NKqigggoqyMJ/AZwvBCN3K7zmAAAAAElFTkSuQmCC"/>
                        }
                        {  !isPostStarred &&
                        <img className="feed-content-card-footer-icon" onClick={handlePostStar} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEoUlEQVR4nO2a74tVRRjHP3fbvRa6hav4syQvLAj7ooy21fCNWy/yhZBEGlGmb6wXqfnGWl/5BwQiVL4x8BcKFiEKUSQGGVlJhmxaamrp6lKCtZq56u5dX8xcPDNnztlz75kfi5wPDPeeOXPm+T5zZ+bMPHOhoKCgIByPyxSMppDGgdXA24E1BKMV+BcYAB4OrCUIa4ARmVYH1uKdJuAM9xrgDOGHo1eWcM/5WnoxqCLPHCbeAN8EVeSRp4k7X0tdAXV5Yw/JDbA7oC4vPArcJrkB7gCzfAryPfOuBVoi18dkqtHMffxKrC18or/4a8DrWt4A8EggjU5Zh+roJaCM6BEXtXvvBNLojAeAs6hO9kTub9Du/YEYDvcNS1EdvAFMityfCPynlXnZs0anHEF17kNDmY+0Mj96U+eYZ1EdqwJzDOXagWGt7HxPGp3yKapT+1PKHtDKfuJcnWPagSFUp7pTyndrZYdkHc4o5Xh2IjADmB75rGh50zQbvcATCOeS+Bl4UssbBC4D/fLzXOR77fNPxBCqC1MDNEsHZiGWrjPk9+nyeqbMK9drDFgBbB+lzBvAtgbqvo1oiEtAH6JhLsi8Pvm9H9GrElkAXCd5rZ4nXQbGZXBknCzrQsN16WMq84ArlgzeQbT+EWBlBudrrJTP9Mk6bGi5In1TSJoDKsAXpE9AWcblBUbpchlpZL6Jch5YBJyqx+hUxE6toW4UgKThewzhS0NMQPQEUyO8kE+vVboRu0hd5yEs7CzLmKM4t4BX81ZugZeAm8T1fQY8aMtICXjfYKQKrLdlpAHWEF8+jwAf4CjYsxbhtG5wsyuDCZSAjQYdVZnvlOWY43o7UcNdrmgGthrsDwGrPNgHYDFiT6+LOIjbc77xwOcGu4OIucArXZgXTEeBKQ7sTQK+M9i7SsDXcgfxeN4I4qyvYtFOBfUssZYuSg1BeQw4QVzccYs2jhvqPyFtjwnaEF0/KnCfxfr3ER9mbTYqtvXqugqc1vK+t1Q3wA/a9Slpc0zxO+qvlBb5qZfniM8xY4o21AXSMHZfh62oK74qali9YWwNgS7UreivwDVLdYPYfP0WuS4BnTYqttUAupijGZ8rkT0uqZ8TPJPxuVRsNYAuRp+0THQgtquHyPYu1+u00gC2+At1kpqbUrYNsXmKhrqGgR2kryCf0mz8nVu1JSqowv7HvClqQWxW0uKN/wDvYg6ethDff8y26EfDvIIq6rChzPPALyQ7rqfTmA9Hv9XKLcsr3sYckDYBdgBfAl9hHucnZdJpB/bKZ6PPOZkI86L/Kksxj3NTVy8j9vdpQyM6Pyxj9N7mlWbi43ITYplqcmYI2AJMNtQ1Wd7TzxKj295NWt4NAv+RYi5msab0NeJccDTmYI5EJyX9HNErbyWI0vfsy6n/IHYx8b/VmNKbeZ3Iw8cJomrdcyPwUI76y4hA7LUUO1tz1J+bXoOgKrALcYpsi5myTlNEuteinbpoJT5h/YTb+Fwn8big7Z1nZhZGRPQjTnR9nA00SVv9EfsLPdiN0YM4HttMmF9gPGKOuQm8F8A+Kxgba/HZCC0FBQUFBfVyF4kwWjkacbHIAAAAAElFTkSuQmCC"/>
                        }
                        {  isPostStarred &&
                        <img className="feed-content-card-footer-icon" onClick={handlePostStar} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEoElEQVRoge2Z3W8UZRTGf2eWtlBEgtJu+dIQGhED8iEsCbAbqiYSolxqIglcGk0oiNyZGLjwjiuIfwAYb42JIaBeEGMw8YOYFjEkRAhSoFAt0m7blLLv48XutjPb2e7OMqOJ6bnYd949857nOXOeOfPOLszarM1aYqbLHRn92rElSQxLKrB60u2k7DoABa209XfvJYHjJRG0GNneA1oRraXjRCyRCuhqZwvj+RtI6eIXDJBveta29Y3FjZVMBcZH9vnIA7Qxf2JvElCxJyBhyB1ClMgLJEBHpPgrHn8FLnXsQrwAFImXE5FW09v2WtxwCUhIh4uDStPShwDH+3GjxVpS9aTXgnon4/rJQykpb4NtutcTF2a8FZA+AKwkGaaTB1Q4GCdkbBVQT7oddAMxN0AcKuU0jmylbf7zThy48VVA7sA08lLYvdACvBsXbCwV0PfL59E6/geweLpkJj/8iQ3S3PSMrb878rjYkROQMH5rS1PQMpRaClqO2I6013/SFOFqcrLPwF0A+nDuNl7zLbYM3DULnB09AV1qX0UqtQyxAqclYMtRYRnYUmAFUgfQFEpQPuwIPk35JhD9wE2k20K3PNSHszuYu4lL9Vn2wbWqCejy0mPIfRQA8Q01ZNGQT6o4N7RzTflMOmrZ/LHyN3P8CSB3DRDCgqX3B62YhxGs06fo6wTedT/lQBeytf2nkO0HTQQ7SRXy4V2mpk9SdfLV1xVMvGPZodMBzoSYetOvAp8jLQgE8g3/lmRKMUZN3puWGzpTybVqF9IvHVvw3BlE238oGYBBE3ssN3whjOeMbVSX2ldR0DlEZwAkDKi+LhNpHeKGFdhlXcNXqnGs+RzQj20dNHEWaUMAxDfUL5mZ1k1L7LIVCrusa6xvJn41txKWGeinmSzYN4ErVI28zxcqmarrAuS/tfGm7bXIQ4Qnsa52tjD09ymktwIEKgn6iYf46pDhFzYn/7Zto67350hbCQnj4uLjyB0OEPAPjUsGGZ94O/LdZrh6OTW0mdNPi04gOxBTlymSh5OpXL47Kpc5tU8JMZGPUTJlG26ESmMJYFvL4I8jGb/P0NZGmER+oZHwkDYXjxvuMmG+jI5G5xP9jeyHp56X9GQDe5kpn0J9C+h6YnXyCchlJslVfXGvQr7sK88rfU6ZqHQiJ+A8ZWKRTHnuO3blixPBIt/E5iwTucvUcRODMEeyFdB55oLWhUtmmpwGDbrN0Q0MVq8IU9UyXixiJJQALQs2IZqnk/DJSTiJTy3FGsvlT9rO/EnzUp2CE4hHNeTUTGHexuQSIJWZscug84bbmMoN77Pt+cl/ZCz74H5q58hBw1sHnA2XWmnuot0HkRJwlR1oUhZ203D7vWz+ZcuN9FZbb13DV7yu0d0m9iB+nyLPZDJOllwCBpmKqzciZ8fs0dBzlh05PeNif5xXRr+0hWNrTO4QMOSXk1m0Vlr/dvq7hYtk+gtkCCc45anwoeVGH+s3Tp1rXeJSjz422X7AQ8gmxp+217lfz/r6E/gqPV+toxeBfjPviO148HOjpEPjf920WfKOg9L28OFL9gajccaftVn7v9o/fzB7l3fCLDkAAAAASUVORK5CYII="/>
                        }
                        <img className="feed-content-card-footer-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACN0lEQVRoge2ZvU7DMBRGj0CUBUXMiCeA8lTwDixlR+JHlCJ4E5Ao8A7QMiNRGBkIMPFTBtcSirBxbCexqY90pzTuPY3T5NOFRCKRSCR8sAZ0gSHwOqkhcAC0G+zLO/PAMfAJjBX1ARwBrYZ69MY8cIVatFiXRC59grmsrF4jnXpgDf021m3vVdWiM5W27MYGdv3NAuuee6mFW8pfXVmDBvp15gV74Vy1aMhb+svh3LHqQKjCGZqrZMC96kBowgvAJnAHLDusc+6nnerIgA7whP19+/OxtFJv++b4FJXVrdXAEBPRJ2ALONV8plh9YK5Gjz8pI5pNzmkhEtG75pwPxJUNRtZGtMgKsANcA8+I5/QA2KOie7aYR/PJF+6ifnf1IVo7Jnn0HbHt5JaKUhTK59FTIhWV2OTRKEXBPo9GJyrp4iaaA9vAYt2N2+KSR0dEcEWLVJJHm0aXlsYO67pk2UrRCY8c1n0j0C2tE+47rLsEPBDZn1Yb8VI+NY8lEOOLqXnxABHNLjCXOiPyV0sQ0j3021uGBznXMQ0PHQIWXwX2EZHwBfGsvUFkVFUe/RfiNvgQbyPC/gDxY0cxH7YRbwGH6G+p4OfDGeKPy0T8TPOZYgU/HzYRL1tRzId9imvnw6EhRy2u4vt1N+5KBjxiLxzlfDjHXjjK+bALY9WBkIVd8ng08+GfuOTx4OfDv2Gbx4OeD/+FTR4Pcj5sStk8Htx82AaTPB7cfNgHxTxe+Xw4kUgkEnXzDThpZxb26UMkAAAAAElFTkSuQmCC"/>
                    </div>
                </div>
            </div>
            {  isCommentRedirected && 
             <>
                <hr style={{marginBottom:"1px"}}></hr>
                <hr style={{marginTop:"1px",marginBottom:"1px"}}></hr>
                <hr style={{marginTop:"1px",marginBottom:"1px"}}></hr>
                <Comment postDetails={post}/>
              </>
            }
           {/* <hr style={{color:"black",backgroundColor:"black",marginTop:"0px",height:"5"}}/> */}
           {/* <div className='horizontal-line'>

           </div> */}
       </div>
    )
}