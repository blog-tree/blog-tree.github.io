import React from 'react';
import './Zsh.css';
import {Row, Col, Container} from "react-bootstrap";
import TextBlock from "../../../Content/TopicArticle/Text/TextBlock";
import MainTitle from "../../../Content/TopicArticle/MainTitle/MainTitle";
import SectionTitle from "../../../Content/TopicArticle/SectionTitle/SectionTitle";

class Zsh extends React.Component {
    render() {
        return (
            <>
                <section
                    className={`section article`}
                >
                    <Container>
                        <Row>
                            <Col xs lg="5" className="text-muted">
                                Z shell instead of default bash or sh
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <MainTitle>Z Shell Terminal Plugin</MainTitle>

                        <SectionTitle>Installation</SectionTitle>
                        <TextBlock>
                            <ol>
                                <li><code>sudo apt install zsh</code> Install Zsh</li>
                                <li><code>sh -c "$(curl -fsSL
                                    https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</code> Install
                                    OhMyZsh
                                </li>
                                <li><code>chsh -s $(which zsh)</code> Set Zsh as a default terminal</li>
                                <li><code></code> <a href={`https://github.com/romkatv/powerlevel10k`}>Powerlevel10k</a>
                                </li>
                            </ol>
                        </TextBlock>

                        <SectionTitle>Plugins</SectionTitle>

                        <TextBlock>
                            Put them to the <code>~/.zshrc</code><br/>
                            <code>plugins=(git sublime wd sudo copyfile copypath composer command-not-found
                                zsh-autosuggestions aliases alias-finder docker-compose per-directory-history)</code>
                            <ul>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git`}>git</a><br/>
                                    <span className={`text-muted`}>
                                        <code>g</code> git <br/>
                                        <code>ga</code> git add<br/>
                                        <code>gc</code> git commit -v<br/>
                                        <code>gpristine</code> git reset --hard && git clean -dffx<br/>
                                        <code>gcd</code> git checkout $(git_develop_branch)<br/>
                                        <code>gd</code> git diff <br/>
                                        <code>gf</code> git fetch <br/>
                                        <code>gl</code> git pull <br/>
                                        <code>grv</code> git remote -v <br/>
                                        <code>current_branch</code> Return the name of the current branch <br/>
                                        <code>git_current_user_name</code>Returns the <i>user.name</i> config value<br/>
                                        <code>git_current_user_email</code> Returns the <i>user.email</i> config value<br/>
                                    </span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sublime`}>sublime</a><br/>
                                    <span className={`text-muted`}>
                                        <code>st</code> opens Sublime Text. If passed a file or directory, Sublime
                                        Text will open it.<br/>
                                        <code>stt</code> open Sublime Text on the current directory.<br/>
                                        <code>sst</code> if sudo is available, sst will open Sublime Text with root
                                        permissions, so that you can modify any file or directory that you pass it.
                                        Useful to edit system files.<br/>
                                    </span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/wd`}>wd</a><br/>
                                    <span className={`text-muted`}>
                                        <code>wd add foo</code> Add warp point to current working directory (--force to
                                        rewrite). <br/>
                                        <code>wd foo</code> From any directory, warp to foo. <br/>
                                        <code>wd rm foo</code> Remove warp point. <br/>
                                        <code>wd list</code> List all warp points (stored in ~/.warprc by default). <br/>
                                        <code>wd path foo</code> Show path of given warp point. <br/>
                                        <code>wd show</code> List warp points to current directory. <br/>
                                        <code>wd clean</code> Remove warp points to non-existent directories. <br/>
                                    </span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo`}>sudo</a><br/>
                                    <span className={`text-muted`}>By pressing the <code>esc</code> key twice, you will have the
                                        same command with <code>sudo</code></span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copyfile`}>copyfile</a><br/>
                                    <span className={`text-muted`}>Puts the contents of a file in your system
                                        clipboard so you can paste it anywhere.</span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/copypath`}>copypath</a><br/>
                                    <span className={`text-muted`}>copies the absolute path of the current directory.</span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/composer`}>composer</a><br/>
                                    <span className={`text-muted`}>
                                        <code>c</code> composer<br/>
                                        <code>cdu</code> composer dump-autoload<br/>
                                        <code>ci</code> composer install<br/>
                                        <code>cr</code> composer require<br/>
                                        <code>crm</code> composer remove<br/>
                                        <code>csu</code> composer self-update<br/>
                                        <code>cu</code> composer update<br/>
                                    </span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found`}>command-not-found</a><br/>
                                    <span className={`text-muted`}>This plugin uses the command-not-found package for
                                        zsh to provide suggested packages to be installed if a command
                                        cannot be found.</span></li>
                                <li><a href={`https://github.com/zsh-users/zsh-autosuggestions`}>zsh-autosuggestions</a><br/>
                                    <span className={`text-muted`}>
                                        It suggests commands as you type based on history and completions. <br/>
                                        <b>Installation</b> <br/>
                                        {/* eslint-disable-next-line no-template-curly-in-string */}
                                        <code>git clone https://github.com/zsh-users/zsh-autosuggestions $&#123;ZSH_CUSTOM:-~/.oh-my-zsh/custom&#125;/plugins/zsh-autosuggestions</code> <br/>
                                        <code>exec zsh</code> <br/>
                                    </span></li>
                                <li><a
                                    href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/aliases`}>aliases</a>
                                    <br/>
                                    <span className={`text-muted`}><code>acs</code> show all aliases by group.<br/>
                                        <code>acs</code> &lt;keyword&gt;: filter aliases by &lt;keyword&gt; and
                                        highlight.</span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/alias-finder`}>alias-finder</a>
                                    <br/>
                                    <span className={`text-muted`}>This plugin searches the defined aliases and outputs
                                        any that match the command inputted. This makes learning new aliases easier.</span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/docker-compose`}>docker-compose</a>
                                    <br/><span className={`text-muted`}>
                                        <code>dco</code> docker-compose <br/>
                                        <code>dcb</code> docker-compose build <br/>
                                        <code>dce</code> docker-compose exec <br/>
                                        <code>dcrestart</code> docker-compose restart <br/>
                                        <code>dcr</code> docker-compose run <br/>
                                        <code>dcstop</code> docker-compose stop <br/>
                                        <code>dcup</code> docker-compose up <br/>
                                        <code>dcupb</code> docker-compose up --build <br/>
                                        <code>dcupd</code> docker-compose up -d <br/>
                                        <code>dcdn</code> docker-compose down <br/>
                                        <code>dclf</code> docker-compose logs -f <br/>
                                    </span></li>
                                <li><a href={`https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/per-directory-history`}>per-directory-history</a>
                                    <br/><span
                                    className={`text-muted`}>This plugin adds per-directory history for zsh,
                                        as well as a global history, and the ability to toggle between them
                                        with a keyboard shortcut Ctrl + G.</span></li>
                            </ul>

                            Full list of plugins is here: <a
                            href={`https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins`}>Plugins &rarr;</a>
                        </TextBlock>

                        <SectionTitle>Hot keys and Shortcuts</SectionTitle>
                        <TextBlock>
                            Add to ~/.zshrc. <br/> <br/>
                            <b>Windows</b> <br/>
                            <code>
                                alias ofd="/mnt/c/Windows/explorer.exe" # ofd . - open this dir in explorer <br/>
                                alias subl="/mnt/c/Program\ Files/Sublime\ Text/subl.exe" # subl file
                            </code> <br/> <br/>
                            <b>Project</b> <br/>
                            <code>
                                alias rtraf="~/sandbox/dockerizer && docker-compose up -d" # to run traefik <br/>
                                alias straf="~/sandbox/dockerizer && docker-compose down" # to stop traefik <br/>
                                alias phpstan='docker run -v $PWD:/app --rm ghcr.io/phpstan/phpstan' # to run phpstan <br/>
                                alias php81composer='docker run -v $PWD:/app --rm php81container composer update' # to run composer under php8 (check img in docker) <br/>
                                alias php81test='docker run -v $PWD:/app --rm php81container ./vendor/bin/phpunit tests' <br/>
                                alias php74composer='docker run -v $PWD:/app --rm php74container composer update' <br/>
                                alias php74test='docker run -v $PWD:/app --rm php74container ./vendor/bin/phpunit tests' <br/>
                            </code>
                        </TextBlock>
                    </Container>
                </section>
            </>
        );
    }
}

export default Zsh;
