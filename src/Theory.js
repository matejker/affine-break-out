import order3 from './order3.png';
import React from 'react';
import ReactEmbedGist from 'react-embed-gist';

function Theory() {
  return (
    <div className="App">
      <div className="App-text">
        <p>
          An affine plane is a two dimensional <a href="https://mathworld.wolfram.com/AffineGeometry.html">affine geometry</a> constructed
          over a <a href="https://en.wikipedia.org/wiki/Finite_field">finite field</a> (or Galois field),
          where points and lines satisfy those axioms: [1, 2]</p>

          <ul>
              <li>Given any two points, there is a unique line joining any two points.</li>
              <li>Each line has at least two points.</li>
              <li>Given a point <b>P</b> and a line <b>L</b> not containing <b>P</b>,
                  there is a unique line that contains <b>P</b> and does not intersect <b>P</b></li>
              <li>There exist three non-collinear points (points not on a single line)</li>
          </ul>

          <p>For an affine plane with finite number of points a following is true: [1]</p>
          <ul>
              <li>each line contains n points</li>
              <li>each point is contained in <code>n + 1</code> distinct lines</li>
              <li>there are <code>n<sup>2</sup></code> points in each line</li>
              <li>there are <code>n<sup>2</sup> + n</code> lines</li>
              <i>The number <code>n</code> is called the order of the affine plane.</i>
          </ul>

          <p>
            Equivalently, we can replace <b>point</b> with <b>person</b> and <b>line</b> with <b>room</b>.
            Therefore, we have:
          </p>
          <ul>
              <li>each <em>room</em> contains <code>n</code> <em>persons</em></li>
              <li>each <em>person</em> is in <code>n + 1</code> distinct <em>rooms</em></li>
              <li>there are <code>n<sup>2</sup></code> <em>persons</em> in total</li>
              <li>there are <code>n<sup>2</sup> + n</code> <em>rooms</em></li>
          </ul>

          <h3>Example: Affine plane of order 3 or how to break out 9 people</h3>
          <p>
            Let's take a field <strong>F<sub>3</sub></strong> with elements <code>{"{0, 1, 2}"}</code> with
            addition and multiplication. [3]</p>
          <table>
              <tr>
                  <th>+</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
              </tr>
              <tr>
                  <th>0</th>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
              </tr>
              <tr>
                  <th>1</th>
                  <td>1</td>
                  <td>2</td>
                  <td>0</td>
              </tr>
              <tr>
                  <th>2</th>
                  <td>2</td>
                  <td>0</td>
                  <td>1</td>
              </tr>
          </table>

          <table>
              <tr>
                  <th>x</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
              </tr>
              <tr>
                  <th>0</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
              </tr>
              <tr>
                  <th>1</th>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
              </tr>
              <tr>
                  <th>2</th>
                  <td>0</td>
                  <td>2</td>
                  <td>1</td>
              </tr>
          </table>

          <p>
            Now, each point is defined as a pair <code>(x, y) &isin; <strong>F<sub>3</sub><sup>2</sup></strong></code>,
            therefore, the total number of points is <code>n<sup>2</sup></code>. Then we can draw lines given
            by <code>y = mx + u</code>, where <code>m, k &isin; <strong>F<sub>3</sub><sup>2</sup></strong></code>.
            Each <code>m</code> give us a set of distinct lines for each <code>k</code>.
          </p>
          <table className="big">
              <tr>
                  <th>m=0</th>
                  <th>x=0</th>
                  <th>x=1</th>
                  <th>x=2</th>
                  <th>m=1</th>
                  <th>x=0</th>
                  <th>x=1</th>
                  <th>x=2</th>
              </tr>
              <tr>
                  <th>u=0</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <th>u=0</th>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
              </tr>
              <tr>
                  <th>u=1</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <th>u=1</th>
                  <td>1</td>
                  <td>2</td>
                  <td>0</td>
              </tr>
              <tr>
                  <th>u=2</th>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <th>u=2</th>
                  <td>2</td>
                  <td>0</td>
                  <td>1</td>
              </tr>
          </table>
          <table className="big">
              <tr>
                  <th>m=2</th>
                  <th>x=0</th>
                  <th>x=1</th>
                  <th>x=2</th>
                  <th>m=&infin;</th>
                  <th>x=0</th>
                  <th>x=1</th>
                  <th>x=2</th>
              </tr>
              <tr>
                  <th>u=0</th>
                  <td>0</td>
                  <td>2</td>
                  <td>1</td>
                  <th>u=0</th>
                  <td>[0, &infin;)</td>
                  <td>[0, &infin;)</td>
                  <td>[0, &infin;)</td>
              </tr>
              <tr>
                  <th>u=1</th>
                  <td>1</td>
                  <td>0</td>
                  <td>2</td>
                  <th>u=1</th>
                  <td>[1, &infin;)</td>
                  <td>[1, &infin;)</td>
                  <td>[1, &infin;)</td>
              </tr>
              <tr>
                  <th>u=2</th>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <th>u=2</th>
                  <td>[2, &infin;)</td>
                  <td>[2, &infin;)</td>
                  <td>[2, &infin;)</td>
              </tr>
          </table>
          <p>
            See the image below, for each <code>m</code> we have 3 set of lines corresponding to different <code>u</code>.
            Blue correspond to <code>m=0</code>, purple <code>m=1</code>, green is <code>m=2</code> and red,
            if you say, is <code>m=&infin;</code>.
          </p>

          <img src={order3} alt="Logo" />

          <p>
            Every color or <code>m</code> value is one round and every class or <code>u</code> is a room, where 3 three
            people are located. To put it all together, this is the full schedule for 9 people over 4 rounds:
          </p>
          <pre>
             Round 1: [0, 1, 2], [3, 4, 5], [6, 7, 8] <br />
             Round 2: [0, 4, 8], [3, 7, 2], [6, 1, 5] <br />
             Round 3: [0, 7, 5], [3, 1, 8], [6, 4, 2] <br />
             Round 4: [0, 3, 6], [1, 4, 7], [2, 5, 8] <br />
          </pre>
          <p>
              You can do it in the same way for any other <code>n</code>-<em>prime</em> (<code>n=2, 3, 5, 7, 11,...</code>).
              However, finite / Galois fields exist also for prime factors, i.e. <code>n=p<sup>m</sup></code>. Construction
              for <code>n=2<sup>2</sup></code> you can see in [3].
          </p>
          <p>If you need to make schedule for less than 9 people, e.g. 7 you can remove 7 and 8 from the table.</p>

          <h3>Python script</h3>
          <p>There is trivial script for constructing lines for affine plane for prime order.</p>
          <ReactEmbedGist
              gist="matejker/8606d661d21885e27d0965e4c5553bff"
              wrapperClass="gist__bash"
              loadingClass="loading__screen"
              titleClass="gist__title"
              contentClass="gist__content"
              errorClass="gist__error"/>
          <h3>References:</h3>
          <ol>
            <li>
              Pascoe, Abraham, "<em>Affine and Projective Planes</em>" (2018). MSU Graduate Theses.
              3233. <a href="https://bearworks.missouristate.edu/theses/3233">Link</a>
            </li>
            <li>
              Bartlett, Padraic, "<em>Minilecture 5: Affine Planes</em>" (2014).
              <a href="http://web.math.ucsb.edu/~padraic/ucsb_2013_14/mathcs103_w2014/mathcs103_w2014_lecture5.pdf">Link</a>
            </li>
              <li>von Gagern, Martin, "<em>Affine Plane of Order 4 Picture?</em>" (2016). Mathematics Stack Exchange.
                  <a href="https://math.stackexchange.com/questions/1925479/affine-plane-of-order-4-picture">Link</a></li>
          </ol>
        </div>
    </div>
  );
}

export default Theory;

<script src="https://gist.github.com/matejker/8606d661d21885e27d0965e4c5553bff.js"></script>
