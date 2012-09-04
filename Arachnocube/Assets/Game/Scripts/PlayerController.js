#pragma strict

public var playerSpeed : float = 10.0;


function Start () {

}

function Update () {

}

// Use fixed upadate when dealing with Rigid bodies and physics stuff
function FixedUpdate () {
	// By default they are mapped to the arrow keys.
	// The value is in the range -1 to 1
	var translationX : float = Input.GetAxis ("Horizontal");
	var translationZ : float = Input.GetAxis ("Vertical");
	
	// Make it move in meters per second instead of meters per frame...
    translationX *= playerSpeed * Time.deltaTime;
    translationZ *= playerSpeed * Time.deltaTime;
    
    // move player 
    transform.Translate(translationX,0,translationZ);
}