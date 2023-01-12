<?php
/**
* Plugin Name: sportsbook box
* Plugin URI: coming in summer 2023!
* Description: Simple box that will add a dropdown to your page attributes to show which sportbook you chose
* Version: 0.1
* Author: Paul ALbrecht
* Author URI: https://paulalbo.github.io/

**/

add_action( 'add_meta_boxes', 'cd_meta_box_add' );

function cd_meta_box_add()
{
    add_meta_box( 'my-meta-box-id', 'Sportbook', 'cd_meta_box_cb', 'page', 'side', 'high' );

}

function cd_meta_box_cb( $post ) {
global $post;
$values = get_post_meta( $post->ID , 'my_meta_box_select', true);
$selected;
echo `<h1>You choose the Sportbook: $values</h1>`;
?>
    <p>
        <label for="my_meta_box_select">Sportsbook</label>
        <select name="my_meta_box_select" id="my_meta_box_select">
            <option value="default"> - </option>
            <?php 
                $url = "https://www.viscaweb.com/developers/test-front-end/pages/step2-sportsbooks.json";
                $json = file_get_contents($url);
                $books = json_decode($json);

                foreach ($books as $book) {
                    if ( $values == $book ) 
                        $selected = "selected";
                    else 
                        $selected = "";

                    echo '<option value="' . $book . '"'  . $selected . '>' . $book . '</option>';
                } ?>
        </select>
    </p>
    <?php   
}
add_action( 'save_post', 'cd_meta_box_save' );
function cd_meta_box_save( $post_id )
{

    if( isset( $_POST['my_meta_box_select'] ) )
        update_post_meta( $post_id, 'my_meta_box_select', $_POST['my_meta_box_select'] );
}


?>