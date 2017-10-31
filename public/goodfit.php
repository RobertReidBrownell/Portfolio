<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/3/17
 * Time: 12:09 PM
 */

// Create SQL query to get list of quotes
$quote = "SELECT quote.id, quote.text, quote.people_id, people.first_name, people.last_name, people.relation_id, relation.relation
FROM quote, people, relation
WHERE quote.people_id = people.id AND people.relation_id = relation.id
ORDER BY quote.id ASC";
// Run the query
$list = $conn->query($quote);
// creating variable to cycle the number of quotes
$fulllist = $list->num_rows;
$i=0;

?>
<section id="intro" class="bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-7 col-xs-12">
                <h2>Why me?</h2>
                <?php
                $goodfit = "SELECT * FROM text 
                            WHERE id = '8' OR id = '9'";
                $fit = $conn->query($goodfit);

                while ($reasons = $fit->fetch_assoc()) {?>

                <p><?= $reasons['content'];?></p>


			<?php } ?>

            </div><!-- .col-lg-8 col-md-6 col-sm-7 col-sm-push-0 col-xs-12 good-fit end -->

            <div class="col-xs-10 col-xs-push-1 quote-box">
                <h2 class="testimonial">Testimonials</h2>
                <div class="carousel slide" data-ride="carousel" id="quote-carousel">
                            <!-- Carousel Slides / Quotes -->
                        <div class="carousel-inner">

	            <?php while(($row = $list->fetch_assoc()) && ($i<=$fulllist)) {

		            if ( $i === 0 ) { ?>

                        <!-- Quote <?= $i ?> -->
                        <div class="item active">
                            <div class="col-xs-12">
                                        <blockquote>
                                <p><?= trim($row['text']); ?></p>

                                <small><b><?= trim($row['first_name']); ?> <?= trim($row['last_name']); ?>
                                    (<?= trim($row['relation']); ?>)</b>
                                </small>
                                        </blockquote>
                            </div><!-- .col-xs-12 end -->
                        </div><!-- .quote <?= $i ?> end -->
			            <?php $i ++;
		            } else { ?>
                        <!-- Quote <?= $i ?> -->
                        <div class="item">
                            <div class="col-xs-12">
                                <blockquote>
                                    <p><?= trim($row['text']); ?></p>

                                    <small><b><?= trim($row['first_name']); ?> <?= trim($row['last_name']); ?>
                                        (<?= trim($row['relation']); ?>)</b>
                                    </small>
                                </blockquote>
                            </div><!-- .col-xs-12 end -->
                        </div><!-- .quote <?= $i ?> end -->
			            <?php $i ++;
		            }
	            }?>
            </div><!-- .carousel-inner end -->
                        <a data-slide="prev" title="Previous" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left testimonials"></i></a>
                        <a data-slide="next" title="Next" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right testimonials"></i></a>
        </div> <!-- .carousel slide -->
    </div><!-- .col-xs-10 col-xs-push-1 quote-box end -->
        </div> <!-- .row end -->
    </div> <!-- .container end -->
</section> <!-- #intro end -->
