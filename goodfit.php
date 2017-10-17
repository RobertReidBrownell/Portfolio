<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/3/17
 * Time: 12:09 PM
 */

// Create SQL query to get list of quotes
$quote = "SELECT quote.text, quote.people_id, people.id, people.first_name, people.last_name, people.relation_id, relation.relation
FROM quote, people, relation
WHERE quote.people_id = people.id AND people.relation_id = relation.id;";
// Run the query
$list = $conn->query($quote);
?>
<section id="the-best" class="bg-light">
    <div class="container">
        <div class="row">
            <h2>Why me?</h2>
            <div class="col-lg-8 col-md-6 col-sm-7 col-sm-push-0 col-xs-10 col-xs-push-1 good-fit">
                <?php
                $goodfit = "SELECT * FROM text 
                            WHERE id = '8' OR id = '9'";
                $fit = $conn->query($goodfit);

                while ($reasons = $fit->fetch_assoc()) {?>

                <p><?= $reasons['content'];?></p>


			<?php } ?>

            </div><!-- col-lg-8 col-md-7 col-sm-7 col-lg-push-1 col-md-push-1 col-sm-push-0 end -->
            <div class="col-lg-3 col-md-5 col-md-push-0 col-sm-4 col-sm-push-0 col-xs-8 col-xs-push-3 quote-box">
                <h2 class="testimonials">Testimonials</h2>

		        <?php while($row = $list->fetch_assoc())  { ?>
                    <div class="quote">

                        &quot; <?= $row['text']; ?>&quot;<br>
                        <b><?= $row['first_name']; ?> <?= $row['last_name']; ?></b>
                        (<?= $row['relation']; ?>)

                    </div><!-- .quote end -->
		        <?php  }  ?>

            </div><!-- .col-lg-3 col-md-5 col-md-push-0 col-sm-4 col-sm-push-0 col-xs-8 col-xs-push-3 quote-box end -->
        </div> <!-- .row end -->
    </div><!-- .container end -->
</section> <!-- #the-best end -->