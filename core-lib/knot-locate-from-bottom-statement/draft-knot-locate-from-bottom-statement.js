
// keep

function Traversar() {
    let that = this

    let connectedKnot

    that.traverseFromBottomStatementAtTopLeft = function (pointerBelongings, connectedKnotInstance) {
        // keep
        let traversar = that

        // keep !
        connectedKnot = connectedKnotInstance

        that.pointerBelongingsAtTopLeft = pointerBelongings
        // keep !
    }
    that.traverseFromBottomStatementAtBottomLeft = function (pointerBelongings, connectedKnotInstance) {
        that.pointerBelongingsAtBottomLeft = pointerBelongings
    }
    that.traverseFromBottomStatementAtBottomRight = function (pointerBelongings, connectedKnotInstance) {
        that.pointerBelongingsAtBottomRight = pointerBelongings
    }
    that.traverseFromBottomStatementAtTopRight = function (pointerBelongings, connectedKnotInstance) {
        // keep !
        that.pointerBelongingsAtTopRight = pointerBelongings
    }

    let pointerBelongingsAtKnotRelativeSize
    that.usePointerBelongingsAtKnotRelativeSize = function (pointerBelongingsAtKnotRelativeSizeInstance) {
        pointerBelongingsAtKnotRelativeSize = pointerBelongingsAtKnotRelativeSizeInstance
    }

    let knotRelativeSize

    that.passThrough = function (connectedKnotInstance, fz) {
        let traversar = that

        fz()

        return traversar
    }

    that.passThroughRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that

        return traversar
    }

    that.useKnotRelativeSize = function (knotRelativeSizeInstance) {
        knotRelativeSize = knotRelativeSizeInstance
    }
    // keep !
    // traversarIN ! \g // soul \ mine
    that.startTraversaring = function () {
        // connectedKnot
        let traversar = that

        that.passThroughRelativeSize(knotRelativeSize).passThrough(connectedKnot, function () {
            // event on knot relative size begin

            pointerBelongingsAtKnotRelativeSize.throughCtx(/* keep */).throughInteraction(function(ctx) {

                connectedKnot
                .useCtx(ctx)
                .captureFromBottomStatementAtTopLeft(pointerBelongingsAtTopLeft)
                .captureFromBottomStatementAtBottomLeft(pointerBelongingsAtBottomLeft)
                .captureFromBottomStatementAtBottomRight(pointerBelongingsAtBottomRight)
                .captureFromBottomStatementAtRightTop(pointerBelongingsAtTopRight)
                .throughCtx(ctx)
                .useRelativeSize(knotRelativeSize, traversar)
                .takeCapture()

                // that \ spars tree ! \m
            })
            // event on knot relative size completed
        })
    }
}

function PointerBelongingsAtKnotRelativeSize(knotRelativeSize) {
    let that = this

    let ctx

    that.throughInteraction = function (fy) {
        let pointerBelongings = that

        fy(ctx)

        return pointerBelongings
    }

    that.throughCtx = function () {
        let pointerBelongings = that
        ctx = knotRelativeSize.connectedToCanvas.ctx

        return pointerBelongings
    }
}

function EchoLocatorAtKnotLocate() {
    let that = this

    // knotFromBottomStatementAtTopLeft
    // knotFromBottomStatementAtBottomLeft
    // knotFromBottomStatementAtBottomRight
    // knotFromBottomStatementAtRightTop
    //
    // knotAtProfile
    //
    // knotAtFront
    // knotFromBottomStatement
    //
    // use knotLocate

    let knotRelativeSize
    that.useRelativeSize = function (knot) {
        knotRelativeSize = knot
    }

    let pointerBelongings
    that.usePointerBelongings = function (pointerBelongingsInstance) {
        pointerBelongings = pointerBelongingsInstance
    }

    that.traverseInteractionToKnotAtProfile = function (knotConnectedToProfile) {
        // use knotRelativeSize
        let knot = knotConnectedToProfile

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToProfile.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }


    that.traverseInteractionToKnotAtFront = function (knotConnectedToFront) {
        let knot = knotConnectedToFront

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToFront.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }
    that.traverseInteractionToKnotFromBottomStatement = function (knotConnectedToBottomStatement) {
        let knot = knotConnectedToBottomStatement

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToBottomStatement.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToBottomStatement.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }

    // do you want to take fish and use pointerBelongings? knot above
    // vik ! release pointerBelongings
    that.connectTo = function (knot) {
        that.traverseInteractionToKnotAtProfile(knot.throughKnotConnectedToProfile)

        that.traverseInteractionToKnotAtFront(knot.throughKnotConnectedToFront)
        that.traverseInteractionToKnotFromBottomStatement(knot.throughKnotConnectedToBottomStatement)
    }

}

function KnotAtProfileStatement() {
    let that = this

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}


function KnotAtFrontStatement() {
    let that = this

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}
function KnotFromBottomStatement(pencil) {
    let that = this

    pencil.rememberSample(that.provideKnot())

    that.throughCtx = function (ctx) {
        let knotFromBottomStatement = that

        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pencil.draw()
            }
        })
    }

    that.useCtx = function (ctx) {
        that.ctx = ctx
    }

    that.takeCapture = function () {
        let knotFromBottomStatement = that
        // keep

        // use knot relative size
        // use pointer belongings

        pencil.draw()

        return knotFromBottomStatement
    }
    that.provideKnot = function () {
        return that
    }

    that.captureFromBottomStatementAtTopLeft = function (pointerBelongingsAtTopLeft) {
        that.pointerBelongingsAtTopLeft = pointerBelongingsAtTopLeft
    }
    that.captureFromBottomStatementAtBottomLeft = function (pointerBelongingsAtBottomLeft) {
        that.pointerBelongingsAtBottomLeft = pointerBelongingsAtBottomLeft
    }
    that.captureFromBottomStatementAtBottomRight = function (pointerBelongingsAtBottomRight) {
        that.pointerBelongingsAtBottomRight = pointerBelongingsAtBottomRight
    }
    that.captureFromBottomStatementAtRightTop = function (pointerBelongingsAtRightTop) {
        that.pointerBelongingsAtRightTop = pointerBelongingsAtRightTop
    }

    that.useRelativeSize = function (knotRelativeSize, traversar) {
        let knotFromBottomStatement = that
        // keep !

        // use knot relative size
        // use pointer belongings

        return knotFromBottomStatement
    }

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function KnotLocate() {
    let that = this

    that.assignCoordinates = function () {
        // keep
    }

    that.constructPointerBelongings = function (pointerBelongingsCollectionOfFour) {
        let that = this
        that.throughPointerBelongingsAtTopLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtTopLeft
        that.throughPointerBelongingsAtBottomLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomLeft

        that.throughPointerBelongingsAtBottomRight = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomRight
        that.throughPointerBelongingsAtTopRight = pointerBelongingsCollectionOfFour.pointerBelongingsAtTopRight
    }

    that.assignKnotToKnotAtProfileStatement = function (knotAtProfileStatement) {
        that.throughKnotConnectedToProfile = knotAtProfileStatement
    }

    that.assignKnotToKnotAtFrontStatement = function (knotAtFrontStatement) {
        that.throughKnotConnectedToFront = knotAtFrontStatement
    }

    that.assignKnotToKnotFromBottomStatement = function (knotFromBottomStatement) {
        that.throughKnotConnectedToBottomStatement = knotFromBottomStatement
    }
}

function Pencil() {
    let that = this

    // keep
    let knot

    that.passThroughCrowd = function () {

    }
    that.joinLoop = function () {

    }
    that.compact = function () {

    }

    let knotThrough
    that.intoPointerBelongingsCollection = function () {
        // pointerBelongingsCollectionOfFour
    }
    that.drawThrough = function (knotThroughInstance) {
        knotThrough = knotThroughInstance
    }

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator

        that.echoLocator.connectTo(knot)
    }

    that.draw = function () {

    }

}