<?php
/**
 * Created by PhpStorm.
 * User: reidbrownell
 * Date: 10/12/17
 * Time: 12:48 AM
 * @Author Reid_Brownell
 * @version 1.0
 */


// Create SQL query to get list of quotes
$quote = "SELECT quote.text, quote.people_id, people.id, people.first_name, people.last_name, people.relation_id, relation.relation
FROM quote, people, relation
WHERE quote.people_id = people.id AND people.relation_id = relation.id;";
// Run the query
$list = $conn->query($quote);
?>
<div class="container">
	<div class="row">
		<div class="col-lg-3 col-md-4 col-sm-7">
			<aside>


				<div>
					<h3>Testimonials</h3>

					<?php while($row = $list->fetch_assoc())  { ?>
						<p><q><?= $row['text']; ?></q>
							<b class="relation"><?= $row['first_name']; ?>
								<?= $row['last_name']; ?></b>
							(<?= $row['relation']?>)
						</p>
					<?php  }  ?>
				</div>
			</aside>
		</div><!-- .col-lg-2 col-md-4 col-sm-7 end -->


		<div>
			<h2>Why am I a good fit for your project or team?</h2>

			<?php
			$goodfit = "SELECT * FROM text 
            WHERE id = '8' OR id = '9'";
			$fit = $conn->query($goodfit);

			while ($reasons = $fit->fetch_assoc()) {?>

				<p><?= $reasons['content'];?></p>


			<?php } ?>

		</div>
	</div> <!-- .row end -->
</div><!-- .container end -->