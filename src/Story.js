import React from 'react';
import { Link } from "react-router-dom";

function Story() {
    return (
        <div className="App">
            <div className="App-text">
                <p>
                    Once upon a time, we wanted to split 21 people into reasonable sized groups over a couple of
                    rounds such that everyone see each other exactly once. We couldn't solve it. Few years later,
                    I looked back and realised that by using <em>affine planes</em> it can be easily <em>solved</em>.
                </p>
                <p>
                    <em>Affine plane</em> is a concept in abstract algebra / geometry, which allows us to solve this
                    problem. Therefore, the name - <em>Affine Break Out Room</em>. More details
                    in the <Link to="./theory">theory</Link> part.
                </p>

                <pre>
                  Round 1: [0, 1, 2, 3, 4] [5, 6, 7, 8, 9] [10, 11, 12, 13, 14] [15, 16, 17, 18, 19] [20, N, N, N, N]<br />
                  Round 2: [0, 6, 12, 18, N] [5, 11, 17, N, 4] [10, 16, N, 3, 9] [15, N, 2, 8, 14] [20, 1, 7, 13, 19]<br />
                  Round 3: [0, 11, N, 8, 19] [5, 16, 2, 13, N] [10, N, 7, 18, 4] [15, 1, 12, N, 9] [20, 6, 17, 3, 14]<br />
                  Round 4: [0, 16, 7, N, 14] [5, N, 12, 3, 19] [10, 1, 17, 8, N] [15, 6, N, 13, 4] [20, 11, 2, 18, 9]<br />
                  Round 5: [0, N, 17, 13, 9] [5, 1, N, 18, 14] [10, 6, 2, N, 19] [15, 11, 7, 3, N] [20, 16, 12, 8, 4]<br />
                  Round 6: [0, 5, 10, 15, 20] [1, 6, 11, 16, N] [2, 7, 12, 17, N] [3, 8, 13, 18, N] [4, 9, 14, 19, N]<br />
                </pre>
                <p>
                    We are aware that there are other ways how to solve this problem, e.g. using <em>Kirkman
                    Triple System</em>, which can split 21 people into 7 groups over 10 rounds perfectly. Other
                    solutions are either inefficient (10 rounds per 3 people) or don't include all pairs. Therefore,
                    affine plane sounds like reasonable solution for small group sizes. For other group sizes, I
                    recommend to use <a href="http://breakoutroom.pythonanywhere.com/allocate/">BoRAT</a> - a handy
                    tool with a nice <a href="https://www.mdpi.com/2073-8994/13/1/13">paper</a> about it.
                </p>
            </div>
        </div>
    );
}

export default Story;
